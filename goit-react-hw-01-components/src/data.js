// src/data.js
export const user = {
  username: 'John Doe',
  tag: 'johndoe',
  location: 'New York, USA',
  avatar: 'url_to_avatar',
  stats: { followers: 1200, views: 5000, likes: 900 },
};

export const statistics = [
  { id: '1', label: 'Followers', percentage: 40 },
  { id: '2', label: 'Views', percentage: 30 },
  { id: '3', label: 'Likes', percentage: 30 },
];

export const options = ['Good', 'Neutral', 'Bad'];

export const transactions = [
  { id: '1', type: 'Invoice', amount: '120.00', currency: 'USD' },
  { id: '2', type: 'Payment', amount: '50.00', currency: 'USD' },
];

export const handleFeedback = (option) => {
  console.log(`${option} feedback received`);
};
