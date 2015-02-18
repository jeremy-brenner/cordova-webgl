/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
      
      app.canvas = document.getElementById("mainCanvas"); 
      app.engine = new BABYLON.Engine( app.canvas, true); 
      app.scene = new BABYLON.Scene(app.engine);
      app.buildScene()
      app.engine.runRenderLoop(function(){ app.scene.render() });

    },

    buildScene: function() {
      app.camera = new BABYLON.TouchCamera("camerarotate",  new BABYLON.Vector3(0, 0, 10), app.scene);
      app.camera.rotation = new BABYLON.Vector3(0, Math.PI, 0);
      app.camera.attachControl(app.canvas, false);
      app.light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), app.scene);
      app.light.intensity = .5;
      app.cube = new BABYLON.Mesh.CreateBox("box", 2, app.scene);
      app.cube.material = new BABYLON.StandardMaterial("Mat", app.scene);
      app.cube.rotation.z = 100;
      app.cube.rotation.y = 100;
    }

  
};

app.initialize();