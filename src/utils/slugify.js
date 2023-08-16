export const slugify = (str) =>
  str
    .toLowerCase() // Chuyen thanh chu thuong
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Xoa cac ky tu dau sau khi tach to hop
    .replace(/[đĐ]/g, 'd') // thay đ thanh d
    .replace(/(^-|-$)+/g, '') // Thay khoang trang thanh -
    .replace(/[^a-z0-9]+/g, '-') // Xoa ky tu dac biet
    .replace(/^-+|-+$/g, '') // Xoa phan du - o dau & cuoi
    .replace(/-+/g, '-'); // Xoa 2 ky tu - lien tiep
