export class UserController {
  private overtimeData: { hours: string; date: string; location: string }[] = [];

  addOvertime(overtimeDetails: { hours: string; date: string; location: string }) {
    this.overtimeData.push(overtimeDetails);
  }

  cancelOvertime(overtimeDetails: { hours: string; date: string; location: string }) {
    this.overtimeData = this.overtimeData.filter(
      overtime => overtime !== overtimeDetails
    );
  }

  approveOvertime(overtimeDetails: { hours: string; date: string; location: string }) {
    
  }
}