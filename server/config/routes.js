var productController = require('../products/productController.js');
var clientController = require('../clients/clientController.js');
var contactusController=require('../contactus/contactusController.js')
// =============================================================================
/*								product route									 */
// =============================================================================

module.exports = (app, express)=> {


	
	app.post('/api/products/', productController.insertProduct);
	app.put('/api/edit/', productController.editProduct);
	app.get('/api/getproduct/:name', productController.getProduct);
	app.get('/api/productsAll/',productController.getAllProducts);
	app.post('/api/remove/',productController.removeProduct);
	// =============================================================================
	/*								Clients Route									 */
	// =============================================================================
app.post('/api/client/', clientController.addingClient);
app.get('/api/oneclient/:companyName',clientController.getClientByCompanyName);
app.get('/api/clients/',clientController.showAllClients);

app.post('/api/removeClient/:companyName',clientController.deleteByClientCompanyName);
	//   contact us route
	app.post('/api/addcontact/',contactusController.addContact);
	app.get('/api/showcontact/',contactusController.showContact)
	app.post('/api/removecontacts/',contactusController.deleteAllContacts);
	};							
