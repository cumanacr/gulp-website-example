"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Person=function(){function e(n){_classCallCheck(this,e),this.name=n}return _createClass(e,[{key:"hello",value:function(){return"string"==typeof this.name?"Hello, I am "+this.name+"!":"Hello!"}}]),e}(),person=new Person("Cristian Umaña"),greetHTML=templates.greeting({message:person.hello()});document.write(greetHTML);
"use strict";for(var max=10,i=0;i<max;i++)console.log(i);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmRhcnktc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBlcnNvbiIsIm5hbWUiLCJ0aGlzIiwidmFsdWUiLCJwZXJzb24iLCJncmVldEhUTUwiLCJ0ZW1wbGF0ZXMiLCJtZXNzYWdlIiwiaGVsbG8iLCJkb2N1bWVudCIsIndyaXRlIiwibWF4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGMWhCa0IsT0FNTyxXQUxULFFBQUFBLEdBQVlDLEdBQU1yQixnQkFBQXNCLEtBQUFGLEdBQ2RFLEtBQUtELEtBQU9BLEVBc0JoQixNQVhBakIsY0FBYWdCLElBQ1RKLElBQUssUUFDTE8sTUFBTyxXQVZQLE1BQXlCLGdCQUFkRCxNQUFLRCxLQUNMLGVBQWlCQyxLQUFLRCxLQUFPLElBRTdCLGFBZ0JSRCxLQVhQSSxPQUFTLEdBQUlKLFFBQU8sa0JBQ3BCSyxVQUFZQyxVQUFBLFVBQ1pDLFFBQVNILE9BQU9JLFNBR3BCQyxVQUFTQyxNQUFNTDtBQ2xCZixZQUVBLEtBQUksR0FGQU0sS0FBTSxHQUVGdkIsRUFBSSxFQUFHQSxFQUFJdUIsSUFBS3ZCLElBQ3ZCd0IsUUFBUUMsSUFBSXpCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaGVsbG8oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5uYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuICdIZWxsbywgSSBhbSAnICsgdGhpcy5uYW1lICsgJyEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdIZWxsbyEnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbignQ3Jpc3RpYW4gVW1hw7FhJyk7XG52YXIgZ3JlZXRIVE1MID0gdGVtcGxhdGVzWydncmVldGluZyddKHtcbiAgICBtZXNzYWdlOiBwZXJzb24uaGVsbG8oKVxufSk7XG5cbmRvY3VtZW50LndyaXRlKGdyZWV0SFRNTCk7XG4iLCJ2YXIgbWF4ID0gMTA7XG5cbmZvcih2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuXHRjb25zb2xlLmxvZyhpKTtcbn0iXX0=
