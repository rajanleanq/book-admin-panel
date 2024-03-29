export const tempTableData = [
  {
    name: "Samarth",
    price: "200",
    slug: "samarth",
  },
  {
    name: "Chrish Thapa",
    price: "2300",
    slug: "chris-thapa",
  },
  {
    name: "Pramod Hamal",
    price: "150",
    slug: "pramod-hamal",
  },
  {
    name: "Mohan Singh Thagunna",
    price: "100000",
    slug: "mohan-singh-thagunna",
  },
];

export const categoryData = [
  {
    "id": 1,
    "isActive": true,
    "createdAt": "2023-10-04T05:45:38.914Z",
    "updatedAt": "2023-10-04T05:45:38.914Z",
    "name": "Education & Career",
    "order": 2,
    "priceTire": {
      "id": 1,
      "isActive": true,
      "createdAt": "2023-10-04T05:44:29.771Z",
      "updatedAt": "2023-10-04T05:44:29.771Z",
      "name": "tire 2",
      "price": "10.99",
      "slug": "tire_2"
    }
  },
  {
    "id": 2,
    "isActive": true,
    "createdAt": "2023-10-04T05:46:02.818Z",
    "updatedAt": "2023-10-04T05:46:02.818Z",
    "name": "Health/Family/Business",
    "order": 3,
    "priceTire": {
      "id": 2,
      "isActive": true,
      "createdAt": "2023-10-04T05:44:44.798Z",
      "updatedAt": "2023-10-04T05:44:44.798Z",
      "name": "tire 3",
      "price": "25.99",
      "slug": "tire_3"
    }
  },
  {
    "id": 3,
    "isActive": true,
    "createdAt": "2023-10-04T05:46:27.577Z",
    "updatedAt": "2023-10-04T05:46:27.577Z",
    "name": "Birth Chart Analysis",
    "order": 4,
    "priceTire": {
      "id": 2,
      "isActive": true,
      "createdAt": "2023-10-04T05:44:44.798Z",
      "updatedAt": "2023-10-04T05:44:44.798Z",
      "name": "tire 3",
      "price": "25.99",
      "slug": "tire_3"
    }
  },
  {
    "id": 4,
    "isActive": true,
    "createdAt": "2023-10-04T05:47:09.301Z",
    "updatedAt": "2023-10-04T05:47:09.301Z",
    "name": "Yearly Dasha(12 months)",
    "order": 5,
    "priceTire": {
      "id": 3,
      "isActive": true,
      "createdAt": "2023-10-04T05:44:57.719Z",
      "updatedAt": "2023-10-04T05:44:57.719Z",
      "name": "tire 4",
      "price": "49.99",
      "slug": "tire_4"
    }
  }
]

export const usersData = [
  {
    "id": 1,
    "isActive": true,
    "createdAt": "2023-10-02T06:28:54.136Z",
    "updatedAt": "2023-10-04T05:32:31.453Z",
    "fullName": "Pradip Parajuli",
    "email": "pradip.leanq1@gmail.com",
    "gender": "MALE",
    "dateOfBirth": "2023-11-11",
    "birthTime": "05:15:00",
    "country": "Nepal",
    "city": "KTM",
    "avatar": "",
    "deviceType": "ANDROID",
    "deviceToken": "Some long fcm Token",
    "freeQuestionCount": 0
  },
  {
    "id": 2,
    "isActive": true,
    "createdAt": "2023-10-02T06:32:44.477Z",
    "updatedAt": "2023-10-04T12:18:53.600Z",
    "fullName": "Mohan Singh Thagunna",
    "email": "socialmohansingh@gmail.com",
    "gender": "MALE",
    "dateOfBirth": "2023-10-03",
    "birthTime": "16:42:00",
    "country": "Nepal",
    "city": "Denmark",
    "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
    "deviceType": "IOS",
    "deviceToken": "PUSH TOKEN",
    "freeQuestionCount": 0
  },
  {
    "id": 3,
    "isActive": true,
    "createdAt": "2023-10-05T05:24:00.567Z",
    "updatedAt": "2023-10-05T06:07:38.097Z",
    "fullName": "mohan singh user",
    "email": "mohan.ebpearls@gmail.com",
    "gender": "MALE",
    "dateOfBirth": "2023-10-05",
    "birthTime": "11:12:00",
    "country": "Nepal",
    "city": "ktm",
    "avatar": "https://lh3.googleusercontent.com/a/ACg8ocL8Z8_cBwYBOLtlUBbXpAs8bEDHxfi-HpccI-PtsCXp=s96-c",
    "deviceType": "ANDROID",
    "deviceToken": "PUSH TOKEN",
    "freeQuestionCount": 0
  }
]

export const pageTableData = [
  {
    name: "About",
    slug: "about",
  },
  {
    name: "Questions Set",
    slug: "question-set",
  },
  {
    name: "Terms",
    slug: "terms",
  },
  {
    name: "Privacy Policy",
    slug: "privacy-policy",
  },
];

export const userQuestionsTableData = [
        {
            "id": 1,
            "isActive": true,
            "createdAt": "2023-10-04T06:23:43.287Z",
            "updatedAt": "2023-10-04T06:23:43.287Z",
            "question": "Solution? I suggest that you implement a custom decorator. You could keep the name of the decorator as MinDate so that when the feat: Make minDate and maxDate support specifying dynamic date PR gets merged/released, you only need to update your class-validator version and change your MinDate import path. Below is my implementation which makes a one-line change to the original implementation to allow MinDate receive a date string:",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-02T06:28:54.136Z",
                "updatedAt": "2023-10-04T05:32:31.453Z",
                "fullName": "Pradip Parajuli",
                "email": "pradip.leanq1@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-11-11",
                "birthTime": "05:15:00",
                "country": "Nepal",
                "city": "KTM",
                "avatar": "",
                "deviceType": "ANDROID",
                "deviceToken": "Some long fcm Token",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 2,
            "isActive": true,
            "createdAt": "2023-10-04T06:44:14.572Z",
            "updatedAt": "2023-10-04T06:44:14.572Z",
            "question": "Mohan Singh kj asfhkjskjfhaskd fkjshd kfjh ksh kfjhs lkaj lkajhlskdfj hksjh kjashlf kjh fkjh kjfhlaksj hfkjsh lkjhs lkjfhlskd jhflkasjh fkjhsd lkfjsh fkjash lfkhjsl hskjhd fkhsd kjs hlkfh alskhflkh fas fs fs fsdf",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 3,
            "isActive": true,
            "createdAt": "2023-10-04T06:44:19.160Z",
            "updatedAt": "2023-10-04T06:44:19.160Z",
            "question": "Mohan Singh kj asfhkjskjfhaskd fkjshd kfjh ksh kfjhs lkaj lkajhlskdfj hksjh kjashlf kjh fkjh kjfhlaksj hfkjsh lkjhs lkjfhlskd jhflkasjh fkjhsd lkfjsh fkjash lfkhjsl hskjhd fkhsd kjs hlkfh alskhflkh fas fs fs fsdf",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 4,
            "isActive": true,
            "createdAt": "2023-10-04T06:46:35.765Z",
            "updatedAt": "2023-10-04T06:46:35.765Z",
            "question": "Mohan Singh kj asfhkjskjfhaskd fkjshd kfjh ksh kfjhs lkaj lkajhlskdfj hksjh kjashlf kjh fkjh kjfhlaksj hfkjsh lkjhs lkjfhlskd jhflkasjh fkjhsd lkfjsh fkjash lfkhjsl hskjhd fkhsd kjs hlkfh alskhflkh fas fs fs fsdf",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 5,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:06.571Z",
            "updatedAt": "2023-10-04T06:47:06.571Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 6,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:08.337Z",
            "updatedAt": "2023-10-04T06:47:08.337Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 7,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:09.443Z",
            "updatedAt": "2023-10-04T06:47:09.443Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 8,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:10.040Z",
            "updatedAt": "2023-10-04T06:47:10.040Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 9,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:10.401Z",
            "updatedAt": "2023-10-04T06:47:10.401Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        },
        {
            "id": 10,
            "isActive": true,
            "createdAt": "2023-10-04T06:47:10.571Z",
            "updatedAt": "2023-10-04T06:47:10.571Z",
            "question": " skdja hfkjsk jfhkjsah kfjhsk jfs lfksjh fkjash kjfhsk jhsdkj hfkjshd fkjshdk hskjd hfkjs hkfjshak f asd fasd fasf ",
            "isPaid": false,
            "isFree": false,
            "user": {
                "id": 2,
                "isActive": true,
                "createdAt": "2023-10-02T06:32:44.477Z",
                "updatedAt": "2023-10-04T12:18:53.600Z",
                "fullName": "Mohan Singh Thagunna",
                "email": "socialmohansingh@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-10-03",
                "birthTime": "16:42:00",
                "country": "Nepal",
                "city": "d",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
                "deviceType": "IOS",
                "deviceToken": "PUSH TOKEN",
                "freeQuestionCount": 0
            },
            "category": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-04T05:45:38.914Z",
                "updatedAt": "2023-10-04T05:45:38.914Z",
                "name": "Education & Career",
                "order": 2
            }
        }
    ]

    export const SingleQuestionDetail= {
        "id": 3,
        "question": "Mohan Singh kj asfhkjskjfhaskd fkjshd kfjh ksh kfjhs lkaj lkajhlskdfj hksjh kjashlf kjh fkjh kjfhlaksj hfkjsh lkjhs lkjfhlskd jhflkasjh fkjhsd lkfjsh fkjash lfkhjsl hskjhd fkhsd kjs hlkfh alskhflkh fas fs fs fsdf",
        "isFree": false,
        "isPaid": false,
        "user": {
            "id": 2,
            "fullName": "Mohan Singh Thagunna",
            "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIgJU1HCTZvwgXH3O_sG3PaZy7HKRiUieT_IRewu8Jgng=s96-c",
            "email": "socialmohansingh@gmail.com",
            "gender": "MALE",
            "dateOfBirth": "2023-10-03",
            "birthTime": "16:42:00",
            "country": "Nepal",
            "city": "d"
        },
        "tier": "tire 2(10.99)"
    }

export const paymentsTableData = [
  {
    question: "How can I enhance my career prospects based on my astrological chart?",
    user:"Samarth",
    date: "2022-10-10",
    payment_method: "Google Pay",
    amount: "$30"
  },
  {
    question: "Should I pursue further education or training for career advancement?",
    user:"Pramod",
    date: "2022-10-10",
    payment_method: "Google Pay",
    amount: "$60"
  },
  {
    question: "What challenges or obstacles should I be prepared for in my career?",
    user:"Chris",
    date: "2022-10-10",
    payment_method: "Apple Pay",
    amount: "$10"
  }
];


export const feedbackData =  [
        {
            "id": 1,
            "isActive": true,
            "createdAt": "2023-10-02T06:34:49.059Z",
            "updatedAt": "2023-10-02T06:34:49.059Z",
            "body": "Solution? I suggest that you implement a custom decorator. You could keep the name of the decorator as MinDate so that when the feat: Make minDate and maxDate support specifying dynamic date PR gets merged/released, you only need to update your class-validator version and change your MinDate import path. Below is my implementation which makes a one-line change to the original implementation to allow MinDate receive a date string:",
            "user": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-02T06:28:54.136Z",
                "updatedAt": "2023-10-04T05:32:31.453Z",
                "fullName": "Pradip Parajuli",
                "email": "pradip.leanq1@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-11-11",
                "birthTime": "05:15:00",
                "country": "Nepal",
                "city": "KTM",
                "avatar": "",
                "deviceType": "ANDROID",
                "deviceToken": "Some long fcm Token",
                "freeQuestionCount": 0
            }
        },
        {
            "id": 2,
            "isActive": true,
            "createdAt": "2023-10-04T05:35:47.876Z",
            "updatedAt": "2023-10-04T05:35:47.876Z",
            "body": "Solution? I suggest that you implement a custom decorator. You could keep the name of the decorator as MinDate so that when the feat: Make minDate and maxDate support specifying dynamic date PR gets merged/released, you only need to update your class-validator version and change your MinDate import path. Below is my implementation which makes a one-line change to the original implementation to allow MinDate receive a date string:",
            "user": {
                "id": 1,
                "isActive": true,
                "createdAt": "2023-10-02T06:28:54.136Z",
                "updatedAt": "2023-10-04T05:32:31.453Z",
                "fullName": "Pradip Parajuli",
                "email": "pradip.leanq1@gmail.com",
                "gender": "MALE",
                "dateOfBirth": "2023-11-11",
                "birthTime": "05:15:00",
                "country": "Nepal",
                "city": "KTM",
                "avatar": "",
                "deviceType": "ANDROID",
                "deviceToken": "Some long fcm Token",
                "freeQuestionCount": 0
            }
        }
]

export const pagesData =  [
        {
            "id": 4,
            "isActive": true,
            "createdAt": "2023-09-29T11:34:15.847Z",
            "updatedAt": "2023-10-04T10:06:39.757Z",
            "title": "Contact Us",
            "slug": "contact-us",
        },
        {
            "id": 1,
            "isActive": true,
            "createdAt": "2023-09-29T11:34:15.814Z",
            "updatedAt": "2023-10-04T10:04:36.861Z",
            "title": "About",
            "slug": "about",
        },
        {
            "id": 2,
            "isActive": true,
            "createdAt": "2023-09-29T11:34:15.832Z",
            "updatedAt": "2023-10-04T10:05:32.109Z",
            "title": "Terms & Conditions",
            "slug": "terms-and-conditions",
        },
        {
            "id": 3,
            "isActive": true,
            "createdAt": "2023-09-29T11:34:15.837Z",
            "updatedAt": "2023-10-04T10:05:46.517Z",
            "title": "Privacy Policy",
            "slug": "privacy-policy",
        },
        {
            "id": 5,
            "isActive": true,
            "createdAt": "2023-09-29T11:34:15.854Z",
            "updatedAt": "2023-10-04T10:06:12.757Z",
            "title": "Suggested Questions",
            "slug": "suggested-questions",
        }
    ]