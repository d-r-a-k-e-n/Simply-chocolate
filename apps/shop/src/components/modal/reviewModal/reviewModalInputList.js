export const reviewModalInputList = [
  {
    placeholder: 'Name',
    name: 'name-review',
    type: 'text',
    required: true,
  },
  {
    placeholder: 'Enter your email',
    name: 'email-review',
    type: 'email',
    pattern: '([A-z0-9]+@[a-z]+\.[a-z]{2,3})',
    required: true,
  },
  {
    placeholder: 'Phone number',
    name: 'phone-review',
    type: 'phone',
    pattern: '\+[0-9]{12}',
    required: true,
  },
];
