import React, { Component } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  disabled: boolean;
}

interface State {
  products: Product[];
  form: Product;
  isEdit: boolean;
  currentPage: number;
  perPage: number;
  message: string;
  showModal: boolean;
  modalAction: "disable" | "delete" | null;
  selectedProductId: string;
}

export default class StudentManager extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products") || "[]"),
      form: { id: "", name: "", price: 0, stock: 0, disabled: false },
      isEdit: false,
      currentPage: 1,
      perPage: 5,
      message: "",
      showModal: false,
      modalAction: null,
      selectedProductId: "",
    };
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: name === "price" || name === "stock" ? Number(value) : value } });
  };

  validateForm = (): boolean => {
    const { id, name } = this.state.form;
    const { products, isEdit } = this.state;

    if (!id || !name) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return false;
    }

    const duplicateId = products.some((p) => p.id === id);
    if (!isEdit && duplicateId) {
      alert("Mã sản phẩm đã tồn tại");
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (!this.validateForm()) return;
    const { form, products, isEdit } = this.state;
    if (isEdit) {
      const updated = products.map((p) => (p.id === form.id ? { ...form } : p));
      this.setState({ products: updated, form: { id: "", name: "", price: 0, stock: 0, disabled: false }, isEdit: false, message: "Cập nhật sản phẩm thành công" });
    } else {
      this.setState({ products: [...products, form], form: { id: "", name: "", price: 0, stock: 0, disabled: false }, message: "Thêm sản phẩm thành công" });
    }
  };

  handleEdit = (id: string) => {
    const product = this.state.products.find((p) => p.id === id);
    if (product) this.setState({ form: { ...product }, isEdit: true });
  };

  openModal = (id: string, action: "disable" | "delete") => {
    this.setState({ showModal: true, modalAction: action, selectedProductId: id });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalAction: null, selectedProductId: "" });
  };

  handleConfirmModal = () => {
    const { modalAction, selectedProductId, products } = this.state;
    if (modalAction === "disable") {
      const updated = products.map((p) => (p.id === selectedProductId ? { ...p, disabled: true } : p));
      this.setState({ products: updated });
    } else if (modalAction === "delete") {
      const updated = products.filter((p) => p.id !== selectedProductId);
      this.setState({ products: updated });
    }
    this.closeModal();
  };

  paginate = (arr: Product[]) => {
    const { currentPage, perPage } = this.state;
    const start = (currentPage - 1) * perPage;
    return arr.slice(start, start + perPage);
  };

  render() {
    const { form, products, isEdit, message, showModal } = this.state;
    const current = this.paginate(products);

    return (
      <div style={{ padding: 20 }}>
        <h2>Quản lý sản phẩm</h2>
        <input type="text" name="id" value={form.id} placeholder="Mã sản phẩm" onChange={this.handleChange} />
        <input type="text" name="name" value={form.name} placeholder="Tên sản phẩm" onChange={this.handleChange} />
        <input type="number" name="price" value={form.price} placeholder="Giá" onChange={this.handleChange} />
        <input type="number" name="stock" value={form.stock} placeholder="Số lượng tồn" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>{isEdit ? "Cập nhật" : "Thêm mới"}</button>

        {message && <p style={{ color: "green" }}>{message}</p>}

        <table border={1} cellPadding={10} style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {current.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.disabled ? "Ngừng bán" : "Đang bán"}</td>
                <td>
                  <button onClick={() => this.handleEdit(p.id)}>Sửa</button>
                  <button onClick={() => this.openModal(p.id, "delete")}>Xóa</button>
                  {!p.disabled && <button onClick={() => this.openModal(p.id, "disable")}>Ngừng bán</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div>
            <p>Bạn có chắc chắn?</p>
            <button onClick={this.closeModal}>Hủy</button>
            <button onClick={this.handleConfirmModal}>Đồng ý</button>
          </div>
        )}
      </div>
    );
  }
}
