const PROFANITY_LIST = [
  'badword1',
  'badword2',
  'badword3',
];

const moderationHook = (content) => {
  const text = String(content || '').toLowerCase();
  const blocked = PROFANITY_LIST.some((word) => text.includes(word));

  return {
    allowed: !blocked,
  };
};

module.exports = {
  moderationHook,
};
