function getAllHashTags(caption: string): string[] {
  if (!caption || typeof caption !== "string") {
    return [];
  }

  // Regular expression to match hashtags
  const hashtagRegex = /#\w+/g;

  // Match all hashtags in the caption
  const hashtags = caption.match(hashtagRegex);

  // Normalize to lowercase and return as an array, or return an empty array if no matches
  return hashtags
    ? hashtags.map((tag) => tag.toLowerCase().substring(1, tag.length))
    : [];
}

export { getAllHashTags };
