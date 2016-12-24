class AppModel {
  constructor(task, completed) {
    this.task = task;
    this.completed = completed || false;
    this.createdAt = new Date();
  }
}

module.exports = AppModel;