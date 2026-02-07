export const getCategoryLink = (category) => {
  if (!category) return "#";

  const gender = category.gender === "k" ? "kadin" : "erkek";
  const categoryName = category.code?.split(":")[1]?.toLowerCase() || "category";

  return `/shop/${gender}/${categoryName}/${category.id}`;
};
