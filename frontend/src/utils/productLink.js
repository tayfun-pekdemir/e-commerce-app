export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getProductLink = (product, categories = []) => {
  if (!product || !categories.length) return "#";

  const category = categories.find(c => product.category_id === c.id);
  if (!category) return "#";

  const gender = category.gender === "k" ? "kadin" : "erkek";
  const categoryName = category.code.split(":")[1]?.toLowerCase() || "category";

  return `/shop/${gender}/${categoryName}/${category.id}/${slugify(product.name)}/${product.id}`;
};

