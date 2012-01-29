// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework
// Copyright: ©2011 OpenMFG LLC, d/b/a xTuple
// =========================================================================
/*globals XT */

/** @mixin

  Support for core document assignments on models
  including contacts, items, files, images and urls.
  
*/

XM.CoreDocuments = {
  
  /**
  A set of all the document assignments on this record
  
  @type SC.Set
  */
  documents: function(key, value) {
    if(value) { 
      this._documents = value;
    } else if(!this._documents) { 
      this._documents = SC.Set.create(); 
    }
    
    return this._documents;
  }.property().cacheable(),
  
  // ..........................................................
  // PRIVATE
  //
  
  /* @private */
  _contactsLength: 0,
  
  /* @private */
  _contactsLengthBinding: '.contacts.length',
  
  /* @private */
  _itemsLength: 0,
  
  /* @private */
  _itemsLengthBinding: '.items.length',
  
  /* @private */
  _filesLength: 0,
  
  /* @private */
  _filesLengthBinding: '.files.length',
  
  /* @private */
  _imagesLength: 0,
  
  /* @private */
  _imagesLengthBinding: '.urls.length',
  
  /* @private */
  _urlsLength: 0,
  
  /* @private */
  _urlsLengthBinding: '.urls.length',
  
  /* @private */
  _contactsDidChange: function() {
    var documents = this.get('documents'),
        contacts = this.get('contacts');

    documents.addEach(contacts);    
  }.observes('contactsLength'),
  
  /* @private */
  _itemsDidChange: function() {
    var documents = this.get('documents'),
        items = this.get('items');

    documents.addEach(items);  
  }.observes('itemsLength'),
  
  /* @private */
  _filesDidChange: function() {
    var documents = this.get('documents'),
        files = this.get('files');

    documents.addEach(files);  
  }.observes('filesLength'),
  
  /* @private */
  _imagesDidChange: function() {
    var documents = this.get('documents'),
        images = this.get('images');

    documents.addEach(images);    
  }.observes('imagesLength'),
  
  /* @private */
  _urlsDidChange: function() {
    var documents = this.get('documents'),
        urls = this.get('urls');

    documents.addEach(urls);  
  }.observes('urlsLength')

};
