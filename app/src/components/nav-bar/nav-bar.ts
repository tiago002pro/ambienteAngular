import './nav-bar.scss'
import template from './nav-bar.html'

class NavbarController {
    constructor (
        // public $location,
        // public $window
    ) {}
}

// NavbarController['$inject'] = [
//     '$location',
//     '$window'
// ]

const navBar = {
    controller: NavbarController,
    controllerAs: '$ctrl',
    templateUrl: template
}

export default navBar