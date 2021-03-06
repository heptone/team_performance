import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';
import {PLATFORM} from 'aurelia-framework';

@autoinject
export class App {
  router: Router;
  message = "hello man";
  title = "test";
  configureRouter(config: RouterConfiguration, router: Router) {
      this.router = router;
      config.options.pushState = true;
      config.map([
          { route: ['', 'home'], name: 'app', moduleId: PLATFORM.moduleName("./welcome"), title: "Team Performance"},
          { route: 'admin', name: 'admin', moduleId: PLATFORM.moduleName("./pages/admin/admin"),  title: "admin"},
          { route: 'performing', name: 'performing', moduleId: PLATFORM.moduleName("./pages/performing"),  title: "performing", nav: true},
          { route: 'performers', name: 'performers', moduleId: PLATFORM.moduleName("./pages/performers"),  title: "performers", nav: true},
          { route: 'performed', name: 'performed', moduleId: PLATFORM.moduleName("./pages/performed"),  title: "performed", nav: true}
      ]);
  }
  constructor(){
    this.message = "Set in the constructor of App class";
    this.title = "TODO"
}


  activate(){
    
  }

}
