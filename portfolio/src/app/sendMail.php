<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $messageContent = $params->message ?? '';
        $phone = $params->phone ?? '';

        $recipient = 'oezguer.taylan@umucu.de';
        $subject = "Neue Kontaktanfrage von $name";

        $htmlMessage = '
        <html>
        <body style="margin: 0; padding: 0; background-color: #f5f7fa;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f7fa; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 30px;">
                  <tr>
                    <td style="font-family: Arial, sans-serif; color: #333;">
                      <h2 style="text-align: center; color: #222;">📩 Neue Kontaktanfrage</h2>
                      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                      <p><strong>👤 Name:</strong> ' . htmlspecialchars($name) . '</p>
                      <p><strong>📧 E-Mail:</strong> <a href="mailto:' . htmlspecialchars($email) . '" style="color: #1a73e8;">' . htmlspecialchars($email) . '</a></p>
                      <p><strong>📱 Telefon:</strong> ' . htmlspecialchars($phone) . '</p>
                      <p><strong>💬 Nachricht:</strong><br />
                      <span style="display: inline-block; margin-top: 8px; padding: 12px; background-color: #f0f2f5; border-radius: 6px; color: #444; line-height: 1.5;">'
                      . nl2br(htmlspecialchars($messageContent)) . '</span></p>
                      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                      <p style="font-size: 12px; color: #888; text-align: center;">
                        Diese Nachricht wurde über dein Kontaktformular auf <strong>oezguer-taylan.umucu.de</strong> übermittelt.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>';

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/html; charset=utf-8';
        $headers[] = 'From: Kontaktformular <kontakt@umucu.de>';
        $headers[] = "Reply-To: $email";

        $success = mail($recipient, $subject, $htmlMessage, implode("\r\n", $headers));

        if (!$success) {
            http_response_code(500);
            echo json_encode(["error" => "Mailversand fehlgeschlagen."]);
        } else {
            echo json_encode(["message" => "E-Mail erfolgreich gesendet."]);
        }

        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
