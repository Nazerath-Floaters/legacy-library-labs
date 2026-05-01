function doOptions() {
  return createJsonResponse({ ok: true })
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const data = JSON.parse(e.postData.contents || '{}')

    sheet.appendRow([
      new Date(),
      data.email || '',
      data.phone || '',
      data.hardware || '',
      data.digitize || '',
      data.details || '',
      data.source || '',
      data.userAgent || '',
      data.submittedAt || '',
    ])

    return createJsonResponse({ ok: true })
  } catch (error) {
    return createJsonResponse({ ok: false, error: String(error) })
  }
}

function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}
