function doPost(e) {
  try {
    // Prevent simultaneous write conflicts with script lock
    var lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait up to 30 seconds for current writes to complete

    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Automatically find or create the sheet named "Let's Talk"
    var sheetName = "Let's Talk";
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Automatically find and delete the default empty "Sheet1" if it exists
    var defaultSheet = ss.getSheetByName("Sheet1");
    if (defaultSheet && defaultSheet.getLastRow() === 0) {
      // Spreadsheets require at least one visible sheet, so only delete if we have another active sheet
      if (ss.getSheets().length > 1) {
        ss.deleteSheet(defaultSheet);
      }
    }

    var expectedHeaders = ["S.No", "Name", "Email", "Organization", "Service", "Message", "Status"];
    var actualHeaders = [];
    if (sheet.getLastRow() > 0) {
      actualHeaders = sheet.getRange(1, 1, 1, 7).getValues()[0];
    }
    
    // Check if the current headers match the expected 7-column format
    var headersMatch = actualHeaders.length === expectedHeaders.length && 
                       actualHeaders.every(function(val, i) { return val === expectedHeaders[i]; });

    // Initialize or automatically correct headers and styles if they are out of date
    if (!headersMatch) {
      sheet.getRange(1, 1, 1, 7).setValues([expectedHeaders]);
      
      // Style headers: Bold, Dark text, Premium slate-200 background, Center alignment, Middle alignment
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#e2e8f0");
      headerRange.setFontColor("#1e293b");
      sheet.setRowHeight(1, 35); // Give header row extra height for breathing room
      
      // Auto-set column widths so columns are neat and readable
      sheet.setColumnWidth(1, 65);  // S.No
      sheet.setColumnWidth(2, 160); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 200); // Organization
      sheet.setColumnWidth(5, 180); // Service
      sheet.setColumnWidth(6, 420); // Message (longer text buffer)
      sheet.setColumnWidth(7, 110); // Status
    }

    // Automatically configure Conditional Formatting rules for Column G (Status) if they are not set
    var rules = sheet.getConditionalFormatRules();
    if (rules.length === 0) {
      var statusRange = sheet.getRange("G2:G1000"); // Applies rules to row 2 to 1000
      
      var ruleUnread = SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("unread")
        .setBackground("#fee2e2") // soft light red
        .setFontColor("#b91c1c")   // dark red text
        .setRanges([statusRange])
        .build();

      var ruleRead = SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("read")
        .setBackground("#dcfce7") // soft light green
        .setFontColor("#15803d")   // dark green text
        .setRanges([statusRange])
        .build();

      sheet.setConditionalFormatRules([ruleUnread, ruleRead]);
    }

    var lastRow = sheet.getLastRow();
    var nextSNo = 1;
    
    // Auto-calculate next Serial Number based on last row value
    if (lastRow > 1) {
      var lastSNoVal = sheet.getRange(lastRow, 1).getValue();
      nextSNo = Number(lastSNoVal) + 1;
      if (isNaN(nextSNo)) {
        nextSNo = lastRow; // Fallback to row index if last S.No wasn't a valid number
      }
    }

    // Extract columns data
    var name = data.name || "";
    var email = data.email || "";
    var org = data.org || "";
    var services = data.services || "";
    var message = data.message || "";
    var status = "unread"; // Default status

    // Append new row (7 values)
    sheet.appendRow([nextSNo, name, email, org, services, message, status]);

    // Get the newly created row index to apply styling
    var newRowIndex = sheet.getLastRow();
    var newRowRange = sheet.getRange(newRowIndex, 1, 1, 7); // 7 columns
    
    // Format cell alignments: Horizontal Center, Vertical Middle, and Word Wrap enabled
    newRowRange.setHorizontalAlignment("center");
    newRowRange.setVerticalAlignment("middle");
    newRowRange.setWrap(true);
    sheet.setRowHeight(newRowIndex, 45); // Make row taller so wrapped text shows fully and cleanly

    // Apply data validation dropdown to the Status cell (Column G / Column 7)
    var statusCell = sheet.getRange(newRowIndex, 7);
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["read", "unread"], true) // Creates dropdown list
      .setAllowInvalid(false) // Blocks invalid custom inputs
      .build();
    statusCell.setDataValidation(rule);

    // Release script lock
    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Row added successfully" 
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    if (lock) {
      lock.releaseLock();
    }
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
