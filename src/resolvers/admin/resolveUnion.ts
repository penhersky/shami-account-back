export default {
  ResAdmin: {
    __resolveType(obj: any): string | null {
      if (obj.message) {
        return 'Result';
      }

      if (obj?.admin?.id) {
        return 'Admin';
      }

      return null;
    },
  },
  ResAdmins: {
    __resolveType(obj: any): string | null {
      if (obj.message) {
        return 'Result';
      }

      if (obj.count) {
        return 'AllAdmins';
      }

      return null;
    },
  },
  ResAdminLogin: {
    __resolveType(obj: any): string | null {
      if (obj.message) {
        return 'Result';
      }

      if (obj.token) {
        return 'AdminLogin';
      }

      return null;
    },
  },
};
