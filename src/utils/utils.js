export default class Utils {
  static isChildOf(child, parent) {

    if (child.parentNode === parent) {
      return true;
    } else if (child.parentNode === null) {
      return false;
    } else {
      return this.isChildOf(child.parentNode, parent);
    }
  }
}