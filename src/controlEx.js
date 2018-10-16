L.Control.include({
  options: {
    // @option position: String = 'topright'
    // The position of the control (one of the map corners). Possible values are `'topleft'`,
    // `'topright'`, `'bottomleft'` or `'bottomright'`
    position: "topright"
  },
  addTo: function(map) {
    this.remove();
    this._map = map;

    var container = (this._container = this.onAdd(map)),
      pos = this.getPosition(),
      corner = map._controlCorners[pos];

    L.DomUtil.addClass(container, "leaflet-control");

    if (pos.indexOf("bottom") !== -1) {
      corner.insertBefore(container, corner.firstChild);
    } else {
      let drag = L.DomUtil.create("div", "drag-box");
      //添加样式  根据有没有拖拽状态  添加拖拽空白标题
      drag.appendChild(container);
      console.log("当前节点上的数据", drag);


      corner.appendChild(drag);
      //添加之前先包一层可以拖拽的
      // corner.appendChild(container);
    }

    return this;
  }
});
