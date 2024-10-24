import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7f1e701c-ea94-4838-a100-8e12001304f6', '1Tianna.Quigley@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv123abc', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ac00e73c-1594-4f41-b0f0-b898a4e5ae05', '10Eliseo23@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv123abc', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('318bc6e1-07eb-4e10-8ac0-a62c9c44290b', '19Emmalee39@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv012jkl', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4202c122-5e3d-4897-a337-fedb321f6577', '28Nikolas_Runolfsdottir78@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv123abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('889908e1-293d-4cb0-889b-651108ade3c0', '46Una_Raynor41@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv345mno', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('28e9a2f5-fca2-487d-b8f7-2b25285d8f79', '55Judah.Koch@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv789ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('78dc3db2-45c4-4be9-bb21-7cbe8e7860c0', '64Zoie_Bahringer3@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv789ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f77557d8-c9b1-4c80-8b16-ae78d5843243', '73Hiram.Jacobi64@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv012jkl', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a0c4f6cc-a845-4095-b01b-4a540bc0fb04', '82Napoleon.Osinski84@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv456def', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('487020b0-bc14-48d0-8801-3e91ec4a5025', 'k1l2m3n4o5', '{"fuga":"arbor","aer":"benigne","calco":"arto","currus":"ventus","trado":"abstergo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('582e318c-4acd-4e7f-8949-23405bb1f4f1', 'u1v2w3x4y5', '{"cedo":"substantia","cuppedia":"benevolentia","quisquam":"aer","contigo":"verbum","stillicidium":"concedo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('07ed7e91-bfd6-45f8-bc82-294c835c9f31', 'f6g7h8i9j0', '{"corroboro":"coma","volva":"tepesco","arbor":"eum","ratione":"impedit","capitulus":"cruciamentum"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('246f2e96-93f5-44e4-88d6-c6c104b9dd9f', 'a1b2c3d4e5', '{"patria":"autus","excepturi":"absque","culpo":"terra","vitae":"cimentarius","ventosus":"complectus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f536e600-e965-4231-ba0c-630d9aa88a41', 'a1b2c3d4e5', '{"hic":"inventore","demens":"pariatur","sit":"timidus","calculus":"assumenda"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('791451f4-e875-4a79-a341-4ff683c1e8b2', 'f6g7h8i9j0', '{"avaritia":"conicio","candidus":"contra","debitis":"cubitum","audax":"cohaero","nesciunt":"virtus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d3b0e7b5-fbe8-4f98-9a06-efdb08688ac8', 'a1b2c3d4e5', '{"deorsum":"stillicidium","tener":"tergeo","delinquo":"venia","veritas":"turpis"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c8f3331a-bbcf-4d16-8abf-b48d80c7b7e6', 'k1l2m3n4o5', '{"natus":"eaque","corrumpo":"vae","caelestis":"curto"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('47523476-fb61-4617-953a-cbaaa965edd8', 'a1b2c3d4e5', '{"textor":"coadunatio","adopto":"amo","asper":"auxilium"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3f4b313c-ee00-4878-9464-df9dde4d628a', 'a1b2c3d4e5', '{"desolo":"adiuvo","auctus":"annus","uterque":"dignissimos","patrocinor":"tamdiu","comedo":"bene"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('dcc7679a-4a2d-48b4-b1fe-8de08c4f7412', 'Pioneer Ventures', 'https://i.imgur.com/YfJQV5z.png?id=122');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('73a1eb5b-9282-4ca8-9dea-95bf7a2741f3', 'Skyline Solutions', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('05d52c61-ab29-4ef6-9b92-d26dcded4252', 'Pioneer Ventures', 'https://i.imgur.com/YfJQV5z.png?id=128');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c0aec9f6-e094-4867-85e4-8968511d378a', 'Pioneer Ventures', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9ea9a860-7264-4b58-a363-65b0eab5d016', 'UrbanTech Group', 'https://i.imgur.com/YfJQV5z.png?id=134');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f2a47282-4e8a-46df-ae76-a1891b924c6b', 'Pioneer Ventures', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('cc26e674-b1ec-42e9-bd56-0b85e68d101f', 'GreenLeaf Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=140');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('32983680-ee35-4cfa-870a-55fc09eab916', 'UrbanTech Group', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ae80faff-4ad9-4640-8821-74a57ff37b11', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=146');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d6feca3f-a8d5-465a-ae10-31bdcd5276da', 'GreenLeaf Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6ab4049d-313d-49f3-9354-3f1213455f2e', 'Product Designer', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79', 'ae80faff-4ad9-4640-8821-74a57ff37b11');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8db41883-5915-4781-ac31-b123b8d1b483', 'Product Designer', '7f1e701c-ea94-4838-a100-8e12001304f6', '73a1eb5b-9282-4ca8-9dea-95bf7a2741f3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9b2ad4dc-1531-4f08-bcdd-b014dea784f5', 'Marketing Manager', 'a0c4f6cc-a845-4095-b01b-4a540bc0fb04', '9ea9a860-7264-4b58-a363-65b0eab5d016');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5a994ad6-b371-4bf9-a356-de41194217d1', 'Customer Support Specialist', '889908e1-293d-4cb0-889b-651108ade3c0', '73a1eb5b-9282-4ca8-9dea-95bf7a2741f3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('0795d1f9-af09-4fff-a808-e8cf131fb756', 'Product Designer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '05d52c61-ab29-4ef6-9b92-d26dcded4252');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7f95ca98-1fb6-4246-91fe-893604eab241', 'IT Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'dcc7679a-4a2d-48b4-b1fe-8de08c4f7412');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7d16ce10-2924-4ab5-8965-5415b0e5c70a', 'Product Designer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f2a47282-4e8a-46df-ae76-a1891b924c6b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('401ff0ad-7566-4200-a5b5-e3bc393097f3', 'Marketing Manager', '78dc3db2-45c4-4be9-bb21-7cbe8e7860c0', 'ae80faff-4ad9-4640-8821-74a57ff37b11');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3d434a4b-5e6c-4708-b832-436ed06627fe', 'Product Designer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '32983680-ee35-4cfa-870a-55fc09eab916');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c25540fb-043b-4584-9d6e-a5823a7f9091', 'Customer Support Specialist', '7f1e701c-ea94-4838-a100-8e12001304f6', 'c0aec9f6-e094-4867-85e4-8968511d378a');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('9031a0e2-7736-4f50-a684-640164f4655e', 'httpsapi.example.comnotify3', 'sub_11223mnopqr', 'a0c4f6cc-a845-4095-b01b-4a540bc0fb04');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('bff4ab4f-a81e-4522-aa80-e90ec9c8e1f9', 'httpsapi.example.comnotify2', 'sub_11223mnopqr', '4202c122-5e3d-4897-a337-fedb321f6577');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('cc5c868e-a962-4f7e-aef1-6a33befd8fa7', 'httpsapi.example.comnotify3', 'sub_44556stuvwx', '4202c122-5e3d-4897-a337-fedb321f6577');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('5c398a6e-86b4-4956-8c46-10b7b81fca45', 'httpsapi.example.comnotify4', 'sub_67890ghijkl', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('4c2a6db7-e32b-4838-8468-3519c8c7a514', 'httpsapi.example.comnotify1', 'sub_67890ghijkl', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('2dfc6e00-877a-4741-bf24-06b2556edbfa', 'httpsapi.example.comnotify5', 'sub_78901yzabcd', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('6712bfc4-2261-4b80-be21-778d95ecec77', 'httpsapi.example.comnotify1', 'sub_11223mnopqr', '78dc3db2-45c4-4be9-bb21-7cbe8e7860c0');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('6870265b-8663-4a3d-b6ea-5d5a2a7b7369', 'httpsapi.example.comnotify1', 'sub_11223mnopqr', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('2eb66f49-71bf-4cc4-b878-edd8e5575966', 'httpsapi.example.comnotify3', 'sub_12345abcdef', '318bc6e1-07eb-4e10-8ac0-a62c9c44290b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('c72f54d2-1cc4-4b86-8a31-25a0366d3537', 'httpsapi.example.comnotify3', 'sub_67890ghijkl', '889908e1-293d-4cb0-889b-651108ade3c0');

INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('824dfe74-1323-4938-8b65-6de521caa959', 'Welcome Offer', 'Hello Name welcome to Business Were excited to have you.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('4b8eb414-898d-4a7d-bf1c-3f2947ba2792', 'Appointment Reminder', 'Hi Name this is a reminder for your appointment on Date at Time.', '889908e1-293d-4cb0-889b-651108ade3c0');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('14f04810-f343-4461-9c61-4c58801c88c5', 'Feedback Request', 'Hello Name welcome to Business Were excited to have you.', '889908e1-293d-4cb0-889b-651108ade3c0');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('1f199dca-3057-4a85-b21b-33cc004d81d9', 'Holiday Greeting', 'Hi Name this is a reminder for your appointment on Date at Time.', '78dc3db2-45c4-4be9-bb21-7cbe8e7860c0');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('d88f586e-7aec-48a1-869d-1a4656a5fb49', 'Welcome Offer', 'Seasons greetings from Business Wishing you a joyful holiday season.', '7f1e701c-ea94-4838-a100-8e12001304f6');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('a4cf048c-f3a8-48b0-9553-e5365b0eb502', 'Appointment Reminder', 'Thank you for your order Name Your order number is OrderNumber.', '889908e1-293d-4cb0-889b-651108ade3c0');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('6c5ae316-12cf-468b-8ee3-3490fb8924a9', 'Order Confirmation', 'Thank you for your order Name Your order number is OrderNumber.', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('1964cf77-9ad6-4439-9d5d-8df5fa8e2b1d', 'Appointment Reminder', 'Thank you for your order Name Your order number is OrderNumber.', '318bc6e1-07eb-4e10-8ac0-a62c9c44290b');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('91380bfc-af54-483d-9dec-242130223b65', 'Feedback Request', 'We value your feedback Name. Please let us know how we did.', '318bc6e1-07eb-4e10-8ac0-a62c9c44290b');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('ea4f92bb-1e67-4fb7-bc08-680a87bace12', 'Welcome Offer', 'We value your feedback Name. Please let us know how we did.', '4202c122-5e3d-4897-a337-fedb321f6577');

INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('00b6d59f-893f-4f46-9d95-4c7369fdd35f', '2025-04-07T08:09:52.639Z', '39.99', 'f77557d8-c9b1-4c80-8b16-ae78d5843243', '6c5ae316-12cf-468b-8ee3-3490fb8924a9');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('2e9faf02-fd0c-4eea-8836-ca66add4e9ef', '2024-12-15T08:35:44.550Z', '49.99', '7f1e701c-ea94-4838-a100-8e12001304f6', '14f04810-f343-4461-9c61-4c58801c88c5');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('10cd5711-c952-444c-840e-a94e29e87303', '2024-04-17T18:29:33.485Z', '59.99', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79', 'd88f586e-7aec-48a1-869d-1a4656a5fb49');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('0f27a255-369f-475a-a8e9-236913c1cb8b', '2025-10-01T09:39:05.747Z', '39.99', '889908e1-293d-4cb0-889b-651108ade3c0', '4b8eb414-898d-4a7d-bf1c-3f2947ba2792');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('bd0a9fbc-0048-4319-b4f1-87ef1ad60c1c', '2025-02-24T10:24:37.671Z', '29.99', 'ac00e73c-1594-4f41-b0f0-b898a4e5ae05', '91380bfc-af54-483d-9dec-242130223b65');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('d71df9d5-c127-498e-9c2d-1aa3f76ef2fa', '2024-03-21T08:14:52.278Z', '59.99', 'ac00e73c-1594-4f41-b0f0-b898a4e5ae05', '91380bfc-af54-483d-9dec-242130223b65');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('c6206d08-3e1c-4cdd-be21-dab6e8c61e96', '2024-08-21T08:16:04.160Z', '39.99', 'a0c4f6cc-a845-4095-b01b-4a540bc0fb04', '1964cf77-9ad6-4439-9d5d-8df5fa8e2b1d');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('8b4e8658-3de4-4f23-89a3-0d6ef89ff906', '2023-11-04T13:16:50.564Z', '59.99', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd88f586e-7aec-48a1-869d-1a4656a5fb49');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('744a3a50-a4a4-4caa-b883-ab6f5439a5aa', '2025-06-30T17:55:16.274Z', '39.99', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79', '6c5ae316-12cf-468b-8ee3-3490fb8924a9');
INSERT INTO "TemplatePurchase" ("id", "purchaseDate", "price", "userId", "templateId") VALUES ('c4240a29-b466-419f-9c66-653f5fdc0a8e', '2023-11-23T07:51:16.994Z', '59.99', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79', '824dfe74-1323-4938-8b65-6de521caa959');

INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('760f8652-a86c-4322-84a7-ba4f70248fc7', 'Holiday Sale Campaign', 'Draft', '2023-11-06T20:52:09.073Z', '2025-10-03T19:09:23.153Z', '78dc3db2-45c4-4be9-bb21-7cbe8e7860c0', 'ea4f92bb-1e67-4fb7-bc08-680a87bace12');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('a2f081f0-5cf2-4be4-80ca-0bce748d4e7a', 'New Product Launch', 'Cancelled', '2025-05-27T21:22:03.427Z', '2024-03-03T21:22:27.888Z', 'ac00e73c-1594-4f41-b0f0-b898a4e5ae05', '1964cf77-9ad6-4439-9d5d-8df5fa8e2b1d');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('073c38bc-4bba-4d8c-b63c-b275d7e0cfc8', 'Customer Feedback Request', 'Scheduled', '2025-01-05T09:59:25.477Z', '2023-12-03T13:52:16.636Z', '7f1e701c-ea94-4838-a100-8e12001304f6', 'd88f586e-7aec-48a1-869d-1a4656a5fb49');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('2c1aa2c3-29df-480c-ae35-0d8e32ac0234', 'Holiday Sale Campaign', 'Cancelled', '2025-08-22T06:46:55.104Z', '2024-11-06T16:45:21.670Z', '78dc3db2-45c4-4be9-bb21-7cbe8e7860c0', '91380bfc-af54-483d-9dec-242130223b65');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('c45eecd7-14c7-4460-acd4-247d3880692e', 'Monthly Newsletter', 'Draft', '2025-07-15T16:15:29.064Z', '2025-05-26T23:32:38.069Z', '318bc6e1-07eb-4e10-8ac0-a62c9c44290b', 'd88f586e-7aec-48a1-869d-1a4656a5fb49');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('216a29d7-900b-4613-acf3-718b85aa91a7', 'Holiday Sale Campaign', 'Sent', '2024-04-21T23:59:25.903Z', '2023-11-15T05:02:39.710Z', '4202c122-5e3d-4897-a337-fedb321f6577', 'a4cf048c-f3a8-48b0-9553-e5365b0eb502');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('c4b2b162-8c56-4f1b-b567-8f6e34537784', 'Holiday Sale Campaign', 'Paused', '2025-08-10T09:28:04.154Z', '2024-04-21T06:28:50.474Z', 'ac00e73c-1594-4f41-b0f0-b898a4e5ae05', '824dfe74-1323-4938-8b65-6de521caa959');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('b5b30a49-4603-444a-9247-3581dde13e76', 'Monthly Newsletter', 'Draft', '2024-10-20T21:14:19.243Z', '2025-02-11T19:46:48.042Z', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79', '4b8eb414-898d-4a7d-bf1c-3f2947ba2792');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('ba8b6b2f-2017-4a27-866f-b547456372b7', 'New Product Launch', 'Sent', '2025-09-03T12:16:22.385Z', '2024-02-05T07:53:52.798Z', '4202c122-5e3d-4897-a337-fedb321f6577', '91380bfc-af54-483d-9dec-242130223b65');
INSERT INTO "MessageCampaign" ("id", "name", "status", "startDate", "endDate", "userId", "templateId") VALUES ('743fa2d7-4b94-4d59-b1d9-99151b4e5a59', 'New Product Launch', 'Cancelled', '2025-06-08T10:58:40.682Z', '2024-12-20T15:14:17.830Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '6c5ae316-12cf-468b-8ee3-3490fb8924a9');

INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('fa747df2-181d-4eb8-9791-01bbef3e3c08', '442071838750', 'pending', '2025-08-29T21:05:35.454Z', 'a2f081f0-5cf2-4be4-80ca-0bce748d4e7a');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('eeb8280c-259b-4228-9059-5551275c062d', '61234567890', 'failed', '2024-10-06T11:06:36.137Z', 'b5b30a49-4603-444a-9247-3581dde13e76');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('adde27ee-3443-4ebf-a7a4-8847a5860d5b', '61234567890', 'read', '2023-11-08T16:16:12.340Z', 'b5b30a49-4603-444a-9247-3581dde13e76');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('db50604b-42ff-48cc-a71a-12930eb30a4f', '81312345678', 'sent', '2024-04-22T01:07:56.629Z', '760f8652-a86c-4322-84a7-ba4f70248fc7');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('7a03a546-1178-44b8-921e-45637b959455', '14155552671', 'sent', '2024-02-07T19:52:52.778Z', '743fa2d7-4b94-4d59-b1d9-99151b4e5a59');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('ee01b725-35e7-4b17-8ca0-52a92f6d7c34', '61234567890', 'read', '2025-06-01T19:29:15.505Z', '743fa2d7-4b94-4d59-b1d9-99151b4e5a59');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('08ba7c78-9f91-40f1-8451-9ab289a56ae9', '919876543210', 'pending', '2024-07-28T00:04:53.047Z', 'c4b2b162-8c56-4f1b-b567-8f6e34537784');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('ee944162-239f-495f-b3e7-bc38bbbe727b', '14155552671', 'pending', '2025-05-05T22:59:07.384Z', 'a2f081f0-5cf2-4be4-80ca-0bce748d4e7a');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('22f6302f-2ac8-4555-9e66-b4326b315d50', '61234567890', 'sent', '2024-04-22T19:18:26.186Z', 'c4b2b162-8c56-4f1b-b567-8f6e34537784');
INSERT INTO "MessageRecipient" ("id", "phoneNumber", "status", "sentAt", "messageCampaignId") VALUES ('19cda3cb-976e-412d-9363-964bbd48cb40', '61234567890', 'pending', '2024-04-01T10:58:25.121Z', '073c38bc-4bba-4d8c-b63c-b275d7e0cfc8');

INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('02019c87-d56a-47ac-be67-2ca3d7745294', 'l0k9j8h7g6f5d4s3a2b1', '19876543210', 'suspended', '4202c122-5e3d-4897-a337-fedb321f6577');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('74b7e599-9d6a-4269-9221-0931701ff2f0', 'q1w2e3r4t5y6u7i8o9p0', '12345678901', 'active', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('c9b2a90d-af04-4fa5-a0bf-a59fc2c4a7a2', 'm1n2b3v4c5x6z7a8s9d0', '19876543210', 'pending', '28e9a2f5-fca2-487d-b8f7-2b25285d8f79');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('b8b7253d-262c-484f-8a59-3587352e6c6d', 'q1w2e3r4t5y6u7i8o9p0', '11234567890', 'terminated', 'ac00e73c-1594-4f41-b0f0-b898a4e5ae05');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('6931f069-ca6f-4b67-afae-47b3051d1037', 'q1w2e3r4t5y6u7i8o9p0', '11234567890', 'inactive', '889908e1-293d-4cb0-889b-651108ade3c0');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('ae733afa-744a-4103-9719-d3a8eae2c503', 'z9y8x7w6v5u4t3s2r1q0', '19876543210', 'suspended', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('4c263adc-6915-4222-8d37-188fd2e1d835', 'a1b2c3d4e5f6g7h8i9j0', '10293847561', 'pending', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('f0e6cdde-dda1-49bb-ba08-65696db83b37', 'l0k9j8h7g6f5d4s3a2b1', '11234567890', 'active', '889908e1-293d-4cb0-889b-651108ade3c0');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('4179cd76-75e6-4f77-8dad-a7556981de85', 'q1w2e3r4t5y6u7i8o9p0', '12345678901', 'terminated', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WhatsAppIntegration" ("id", "apiKey", "phoneNumber", "status", "userId") VALUES ('142523c7-2530-4071-b24e-3ded83ca5a89', 'l0k9j8h7g6f5d4s3a2b1', '10293847561', 'pending', 'f77557d8-c9b1-4c80-8b16-ae78d5843243');

INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('9d0e96b2-351d-4b1e-a785-617117630554', 'Starter Pack', 'Perfect for startups', '29.99', 332, 'Unlimited templates');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('e06e0b72-b056-4829-8402-72ce5d680acd', 'Pro Plan', 'Includes advanced features', '79.99', 23, 'Unlimited templates');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('46c889ee-06e6-413f-a483-35c6562c5a34', 'Basic Plan', 'Perfect for startups', '29.99', 808, 'Priority support');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('fd9bf6c4-155b-413b-8978-7a9d93bf3bb3', 'Pro Plan', 'Best for large enterprises', '79.99', 92, 'Advanced analytics');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('a5ca86c8-49f2-454b-8267-7075b551c77c', 'Pro Plan', 'Includes advanced features', '19.99', 530, 'Custom branding');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('ce2a0417-7348-496a-8c08-e3bd7bd1ec62', 'Starter Pack', 'Ideal for small businesses', '19.99', 753, 'Advanced analytics');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('7530914e-6d06-4c8f-a9a3-658b9a5a07fc', 'Basic Plan', 'Perfect for startups', '29.99', 923, 'Multiuser access');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('fee80703-56b6-4256-992e-29a19a6441c4', 'Premium Package', 'Perfect for startups', '99.99', 355, 'Custom branding');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('586e2218-1a99-47ca-91f6-436c3a36a508', 'Basic Plan', 'Comprehensive solution for all needs', '79.99', 607, 'Priority support');
INSERT INTO "SubscriptionPlan" ("id", "name", "description", "price", "duration", "features") VALUES ('3ba68742-63d4-4b1e-93a6-568d9e203d3e', 'Starter Pack', 'Perfect for startups', '29.99', 828, 'Unlimited templates');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
