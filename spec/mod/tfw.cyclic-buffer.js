require("tfw.cyclic-buffer",function(t,r){function i(t){"undefined"==typeof t&&(t={}),"undefined"==typeof t.capacity&&(t.capacity=128),this._buffer=new Array(t.capacity),this._length=0,this._cursor=0,Array.isArray(t.init)&&t.init.forEach(function(t){this.push(t)},this)}i.prototype.push=function(t){var r=this._buffer;r[this._cursor++]=t,this._length++,this._cursor==r.length&&(this._cursor=0)},i.prototype.pop=function(){if(0!=this._length){this._length--,this._cursor--;var t=this._buffer;return this._cursor<0&&(this._cursor=t.length-1),t[this._cursor]}},i.prototype.reset=function(){this._length=0},Object.defineProperty(i.prototype,"length",{get:function(){return this._length},set:function(t){},configurable:!0,enumerable:!0}),r.exports=i});
//# sourceMappingURL=tfw.cyclic-buffer.js.map