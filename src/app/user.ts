import { Email } from './email';
import { Phone } from './phone';

export class User {
  id: string;
  name: string;
  userName: string;
  jobDescription: string;
  businessUnit: string;
  createdDate: string;
  updatedDate: string;
  status: string;
  email: Email[];
  phone: Phone[];
}

/*
{
  "email": [
      {
          "emailValue": "yash@xyz.com",
          "isPrimary": true
      },
      {
          "emailValue": "yash@abc.com"
      }
  ],
  " ": [
      {
          "phoneNumber": "123-456-7894",
          "isPrimary": true,
          "phoneType": "HOME"
      },
      {
          "phoneNumber": "123-456-1111",
          "phoneType": "MOBILE"
      }
  ]
}*/
