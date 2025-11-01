import { isString } from "util";

export const userRules = {
  email: {
    isString: {
      errorMessage: "value must be a string",
    },
    notEmpty: {
      errorMessage: "value must be a string",
    },
    isEmail: {
      errorMessage: "value must be an email form",
    },
  },
  password: {
    isLength: {
      options: {
        min: 5,
        max: 10,
      },
      errorMessage: "value must be a string between 5-10",
    },
    isString: {
      errorMessage: "value must be a string",
    },
    notEmpty: {
      errorMessage: "value must be a string",
    },
  },
  name: {
    isLength: {
      options: {
        min: 3,
        max: 15,
      },
      errorMessage: "value must be a string between 5-10",
    },
    isString: {
      errorMessage: "value must be a string",
    },
  },
};

// Product-specific validation
export const productRules = {
  name: {
    isString: { errorMessage: "Product name must be a string" },
    notEmpty: { errorMessage: "Product name is required" },
    isLength: {
      options: { min: 3, max: 100 },
      errorMessage: "Product name must be 3-100 chars",
    },
  },
  description: {
    isString: { errorMessage: "Description must be a string" },
    notEmpty: { errorMessage: "Description is required" },
    isLength: {
      options: { min: 10, max: 2000 },
      errorMessage: "Description must be 10-2000 chars",
    },
  },
  price: {
    notEmpty: { errorMessage: "Price is required" },
    isFloat: {
      options: { min: 0 },
      errorMessage: "Price must be a positive number",
    },
  },
  currency: {
    isString: { errorMessage: "Currency must be a string" },
    notEmpty: { errorMessage: "Currency is required" },
    isLength: {
      options: { min: 1, max: 5 },
      errorMessage: "Currency should be 1-5 chars",
    },
  },
  discount: {
    optional: true,
    isFloat: {
      options: { min: 0, max: 100 },
      errorMessage: "Discount must be 0-100 percent",
    },
  },
  images: {
    optional: true,
    isArray: { errorMessage: "Images must be an array of URLs" },
  },
  brandId: {
    optional: true,
    isString: { errorMessage: "brandId must be a string" },
  },
  categoryId: {
    optional: true,
    isString: { errorMessage: "categoryId must be a string" },
  },
  in_stock: {
    optional: true,
    isInt: {
      options: { min: 0 },
      errorMessage: "in_stock must be an integer >= 0",
    },
  },
  rating: {
    optional: true,
    isFloat: {
      options: { min: 0, max: 5 },
      errorMessage: "rating must be between 0 and 5",
    },
  },
};

// Comments validation rules
export const commentsRules = {
  title: {
    optional: true,
    isString: { errorMessage: "Comment title must be a string" },
    isLength: {
      options: { min: 3, max: 200 },
      errorMessage: "Comment title must be 3-200 chars",
    },
  },
  description: {
    notEmpty: { errorMessage: "Comment description is required" },
    isString: { errorMessage: "Comment description must be a string" },
    isLength: {
      options: { min: 3, max: 2000 },
      errorMessage: "Comment description must be 3-2000 chars",
    },
  },
  rating: {
    notEmpty: { errorMessage: "Rating is required" },
    isFloat: {
      options: { min: 0, max: 5 },
      errorMessage: "Rating must be between 0 and 5",
    },
  },
  author_id: {
    notEmpty: { errorMessage: "author_id is required" },
    isString: { errorMessage: "author_id must be a string" },
  },
  product_id: {
    isString: { errorMessage: "product_id must be a string" },
  },
};

// Brand validation rules
export const brandRules = {
  name: {
    isString: { errorMessage: "Brand name must be a string" },
    notEmpty: { errorMessage: "Brand name is required" },
    isLength: {
      options: { min: 2, max: 100 },
      errorMessage: "Brand name must be 2-100 chars",
    },
  },
  description: {
    optional: true,
    isString: { errorMessage: "Brand description must be a string" },
    isLength: {
      options: { min: 5, max: 1000 },
      errorMessage: "Brand description must be 5-1000 chars",
    },
  },
};

// Category validation rules
export const categoryRules = {
  name: {
    isString: { errorMessage: "Category name must be a string" },
    notEmpty: { errorMessage: "Category name is required" },
    isLength: {
      options: { min: 2, max: 100 },
      errorMessage: "Category name must be 2-100 chars",
    },
  },
  description: {
    optional: true,
    isString: { errorMessage: "Category description must be a string" },
    isLength: {
      options: { min: 5, max: 1000 },
      errorMessage: "Category description must be 5-1000 chars",
    },
  },
};
export const addressRules = {
  street: {
    isString: { errorMessage: "Street must be a string" },
    notEmpty: { errorMessage: "Street is required" },
    isLength: {
      options: { min: 3, max: 200 },
      errorMessage: "Street must be 3-200 chars",
    },
  },
  city: {
    isString: { errorMessage: "City must be a string" },
    notEmpty: { errorMessage: "City is required" },
    isLength: {
      options: { min: 3, max: 200 },
      errorMessage: "City must be 3-200 chars",
    },
  },
  state: {
    isString: { errorMessage: "State must be a string" },
    notEmpty: { errorMessage: "State is required" },
    isLength: {
      options: { min: 3, max: 200 },
      errorMessage: "State must be 3-200 chars",
    },
  },
  zip_code: {
    isString: { errorMessage: "Zip code must be a string" },
    notEmpty: { errorMessage: "Zip code is required" },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Zip code must be 3-20 chars",
    },
  },
  country: {
    isString: { errorMessage: "Country must be a string" },
    notEmpty: { errorMessage: "Country is required" },
    isLength: {
      options: { min: 3, max: 100 },
      errorMessage: "Country must be 3-100 chars",
    },
  },
};

export const profileRules = {
  firstName: {
    optional: true,
    isString: { errorMessage: "First name must be a string" },
    notEmpty: { errorMessage: "First name is required" },
    isLength: {
      options: { min: 2, max: 50 },
      errorMessage: "First name must be 2-50 chars",
    },
  },
  lastName: {
    optional: true,

    isString: { errorMessage: "Last name must be a string" },
    notEmpty: { errorMessage: "Last name is required" },
    isLength: {
      options: { min: 2, max: 50 },
      errorMessage: "Last name must be 2-50 chars",
    },
  },
  email: {
    optional: true,

    isString: { errorMessage: "Email must be a string" },
    notEmpty: { errorMessage: "Email is required" },
    isEmail: { errorMessage: "Email must be a valid email address" },
  },
  phone: {
    optional: true,

    isString: { errorMessage: "Phone number must be a string" },
    notEmpty: { errorMessage: "Phone number is required" },
    isLength: {
      options: { min: 7, max: 20 },
      errorMessage: "Phone number must be 7-20 chars",
    },
  },
  address_detail: {
    optional: true,

    isString: { errorMessage: "Address must be a string" },
    notEmpty: { errorMessage: "Address is required" },
  },
  city: {
    optional: true,

    isString: { errorMessage: "City must be a string" },
    notEmpty: { errorMessage: "City is required" },
    isLength: {
      options: { min: 2, max: 100 },
      errorMessage: "City must be 2-100 chars",
    },
  },
  socials: {
    optional: true,
    isArray: { errorMessage: "Socials must be an array of strings" },
    custom: {
      options: (value: any) => {
        if (!Array.isArray(value)) {
          return false;
        }
        for (const item of value) {
          if (typeof item !== "string") {
            return false;
          }
        }
        return true;
      },
      errorMessage: "Socials must be an array of strings",
    },
  },
};
