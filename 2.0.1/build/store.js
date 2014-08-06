/*
combined files : 

kg/departurelayer/2.0.1/store

*/
/**
 * @fileOverview 本地存储
 * @creator 槿瑟<jinse.zjw@alibaba-inc.com>
 * @modify 良田<chenhao.lch@alibaba-inc.com>
 * @update 2014-07-15
 * @log 
 *   更新 var 按照规范
 *   更新 tabsize 按照规范
 */
KISSY.add('kg/departurelayer/2.0.1/store',function(S) {
	var api               = {};
	var win               = window;
	var doc               = win.document;
	var localStorageName  = 'localStorage';
	var globalStorageName = 'globalStorage';
	var storage;

	api.set    = function (key, value) {};
	api.get    = function (key)        {};
	api.remove = function (key)        {};
	api.clear  = function ()           {};

	if (localStorageName in win && win[localStorageName]) {
		storage    = win[localStorageName];
		api.set    = function (key, val) { storage.setItem(key, val) };
		api.get    = function (key)      { return storage.getItem(key) };
		api.remove = function (key)      { storage.removeItem(key) };
		api.clear  = function ()         { storage.clear() };
	} else if (globalStorageName in win && win[globalStorageName]) {
		storage    = win[globalStorageName][win.location.hostname];
		api.set    = function (key, val) { storage[key] = val };
		api.get    = function (key)      { return storage[key] && storage[key].value };
		api.remove = function (key)      { delete storage[key] };
		api.clear  = function ()         { for (var key in storage ) { delete storage[key] } };
	} else if (doc.documentElement.addBehavior) {
		function getStorage() {
			if (storage) { return storage }
			storage = doc.body.appendChild(doc.createElement('div'));
			storage.style.display = 'none';
			// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
			// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
			storage.addBehavior('#default#userData');
			storage.load(localStorageName);
			return storage;
		}
		api.set = function (key, val) {
			var storage = getStorage();
			storage.setAttribute(key, val);
			storage.save(localStorageName);
		};
		api.get = function (key) {
			var storage = getStorage();
			return storage.getAttribute(key);
		};
		api.remove = function (key) {
			var storage = getStorage();
			storage.removeAttribute(key);
			storage.save(localStorageName);
		}
		api.clear = function () {
			var storage = getStorage();
			var attributes = storage.XMLDocument.documentElement.attributes;;
			storage.load(localStorageName);
			for (var i=0, attr; attr = attributes[i]; i++) {
				storage.removeAttribute(attr.name);
			}
			storage.save(localStorageName);
		}
	}
	return api;
});