// WhatsApp click-to-chat helper. wa.me accepts a phone number in international
// format with no "+", spaces or leading zeros, plus an optional pre-filled
// message.

const WHATSAPP_NUMBER = "919099908890";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const generalEnquiryMessage =
  "Hi Pramukh Pharma Tech, I'd like to enquire about your pharmaceutical processing machinery. Could you share more details?";

export function productEnquiryMessage(productName: string): string {
  return `Hi Pramukh Pharma Tech, I'm interested in the ${productName}. Could you share more details and pricing?`;
}
