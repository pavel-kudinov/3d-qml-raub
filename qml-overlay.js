'use strict';

const node3d = require('node-3d-ready-raub');
const QmlRect = require('./qml-rect');


class QmlOverlay extends QmlRect {
	
	constructor(opts) {
		
		opts.size = [2, 2]
		opts.pos = [-1, -1]
		
		super(opts);
		
	}
	
	
	_mat(opts) {
		
		return new node3d.QmlOverlayMaterial(opts);
		
	}
	
	get textureId() { return this._textureId; }
	set textureId(id) { this._textureId = id; }
	
	
}


module.exports = QmlOverlay;