function doGet() {
  return createJsonResponse({ ok: true, message: 'Legacy Library intake endpoint is live.' })
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const data = JSON.parse(e.postData.contents || '{}')

    if (data.company) {
      return createJsonResponse({ ok: true, ignored: true })
    }

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
