export const baseURL: string = "http://localhost:4000";
export const endpoints = {
  auth: {
    login: "/login",
    authSuccess: "/auth/success",
    logout: "/logout",
  },
  admin: {
    addBook: "/admin/book/add",
    deleteBook: (id: string | number) => "/admin/book/delete/" + id,
    editBook: "/book/edit",
    getUser: "/admin/users",
    getAllBooks: (page?: string, limit?: string): string => {
      return "/books" + `?page=${page}&limit=${limit}`;
    },
  },
};
