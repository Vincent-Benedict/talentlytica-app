class MahasiswaModel {
    constructor(id, name, nilai1, nilai2, nilai3, nilai4) {
      this.id = id;
      this.name = name;
      this.nilai1 = nilai1;
      this.nilai2 = nilai2;
      this.nilai3 = nilai3;
      this.nilai4 = nilai4;
    }
  
    getMahasiswa() {
      return this;
    }
  }
  
  export default MahasiswaModel;