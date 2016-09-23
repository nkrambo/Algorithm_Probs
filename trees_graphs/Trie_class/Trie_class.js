
// Trie

// A trie (sometimes called a prefix tree) is a variant of an n-ary tree,
// trees with nodes containing n children. What makes tries unique is that they
// store characters at each node. Each pathway down the tree may represent a word.

// '*' nodes (sometimes called null nodes) are used to represent complete words.

// A node in a trie could have anywhere from 0 to ALPHABET_SIZE + 1 children.

// Very commonly a trie is used to store the entire 'English' language for
// quick prefix lookups.

https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330#.xbphdk4np

// class Trie {
//
// }
//
// export default Trie;

var node = {
    key : null
  , value : null
  , children : []
}


function Trie() {
	this.head = {
			key : ''
		, children: {}
	}
}

Trie.prototype.add = function(key) {

	var curNode = this.head
		, newNode = null
		, curChar = key.slice(0,1);

	key = key.slice(1);

	while(typeof curNode.children[curChar] !== "undefined"
		&& curChar.length > 0){
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
	}

	while(curChar.length > 0) {
		newNode = {
				key : curChar
			, value : key.length === 0 ? null : undefined
			, children : {}
		};

		curNode.children[curChar] = newNode;

		curNode = newNode;

		curChar = key.slice(0,1);
		key = key.slice(1);
	}

};

Trie.prototype.search = function(key) {
	var curNode = this.head
		, curChar = key.slice(0,1)
		, d = 0;

	key = key.slice(1);

	while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0){
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
		d += 1;
	}

	if (curNode.value === null && key.length === 0) {
		return d;
	} else {
		return -1;
	}

}

Trie.prototype.remove = function(key) {
	var d = this.search(key);
	if (d > -1){
		removeH(this.head, key, d);
	}
}

function removeH(node, key, depth) {
	if (depth === 0 && Object.keys(node.children).length === 0){
		return true;
	}

	var curChar = key.slice(0,1);

	if (removeH(node.children[curChar], key.slice(1), depth-1)) {
		delete node.children[curChar];
		if (Object.keys(node.children).length === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}


