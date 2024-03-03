Update Product by Name:

Implement a function to update the price of a product with a specific name. For example, update the price of the product named "Laptop" to 1500.
Log the updated product if found; otherwise, indicate that the product was not found.

Soft Delete Products:

Modify the schema to include a new field named isDeleted with a default value of false.
Implement a function to "soft delete" a product by setting the isDeleted field to true.
Log the soft-deleted product if found; otherwise, indicate that the product was not found.

Hard Delete Expired Products:

Extend the schema to include a new field named expirationDate of type Date.
Insert a product with an expiration date in the past.
Implement a function to "hard delete" products whose expirationDate has passed.
Log the number of hard-deleted products.

Bulk Update Products:

Implement a function to update the description of all products that are currently in stock.
Log the number of products updated.

Bulk Delete Out-of-Stock Products:

Implement a function to delete all products that are currently out of stock.
Log the number of products deleted.

zakaria ait el hadj