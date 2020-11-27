import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product from './Product';

class Giohang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98sk26bd00m27xOMYIOJJ3Yd9_eupdd5QQRPTk1zHlu6eJCcAztBIWuD5f8KLbuu1R3223tgx&usqp=CAc', price: '799.000 đ', name: 'Giày Jockey Go 0415 - Woman', shop: 'Jockey.vn', gg: '-15%' },
        { id: 2, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwpW2K4uiJE0wFlcEn2_zqIdXRq2azCb_Jtek1PbPUDdoYnaB2CaTK4C69-0uhk7mq_Yud2XR&usqp=CAc', price: '699.000 đ', name: 'Giày Jockey Style 0414 - Men', shop: 'Jockey.vn', gg: '-12%' },
        { id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESCgNU5EhOw5cSJ_w0fFJ-kT20YGbzFsp8Oht5Ab7aBKz_1G7vvJqOVSA0TE&usqp=CAc', price: '490.000 đ', name: 'GIÀY NAM DA LỘN CAO CẤP (AG0001)', shop: 'agiay.com', gg: '-24%' },
        { id: 4, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFJSO4rklFqCzpvqnTFgoH0X_F7QIIQw5jQJK-ecov1BgK-vt5mOflEH9Ww&usqp=CAc', price: '580.000 đ', name: 'BASAS SUEDE - LOW TOP - BLACK', shop: 'Ananas', gg: '-18%' },
        { id: 5, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1II-HwqkI4zi_01RFrITabPJN3Lk6WXszDG0NU9HBTvDzXEF7NEZVZvM8QXw&usqp=CAc', price: '250.000 đ', name: 'Xả Kho Tận Gốc - Đủ size 39 - 43 - GIÀY NAM LƯỚI THOÁNG KHÍ PHIÊN BẢN GIỚI HẠN (AG0004)', shop: 'agiay.com', gg: '-40%' },
        { id: 6, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatr5PT6eJwJKgNIm9dSLndvSk4kuMKzIylL5LRuDNQABZUmUsKVALuyxtLjs&usqp=CAc', price: '290.000 đ', name: 'Mẫu Giày Thể Thao Nam Phong Cách Trẻ Trung – Hàng Hot 2020 (BN0072)', shop: 'agiay.com', gg: '-22%' },
        { id: 7, uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSrBlx0YHDqMn4_uoz6xERHIVSRFGdDHNhDuv7_W5hEI1mBobDxxSbbb6SgtY8&usqp=CAE', price: '449.000 đ', name: 'Giày Nam , Giày Sneaker Nam Nữ, Giày Thể Thao Hot Trend Cao Cấp - Tặng Kèm Tất Lửa Nam - Giày Sneaker Nam', shop: 'NhaBanHang.com', gg: '-34%' },
        { id: 8, uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGaDzIfg0qKV3ZOuPNP-tDnP6nEE16PlPElM8qfcCJcStjJC6LEakvD1zAnQ&usqp=CAE', price: '187.000 đ', name: 'Giày Thể Thao Nam Có Đệm Khí Trợ Lực Êm Chân, Thoáng Khí - GN92 - Trắng - 40', shop: 'tiki.com', gg: '-20%' },
        { id: 9, uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwHmBhq1zGD8o-KQlQxKZtTqQ8ypCzIC53SivDTz8g6gXDirgaLU8rJvbfJa2Qq6v2Pxr-Npw&usqp=CAE', price: '149.000 đ', name: '[SIÊU PHẨM] Giày nam thời trang - ELLAAA phản quang có 2 màu siêu đẹp', shop: 'shopee', gg: '-10%' },
        { id: 10, uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDzTWuqX36kK97d4IGXKnK8-u9ojTY8GNnywbOmxiGrcDA2lwbCeJSnNa4cQ&usqp=CAE', price: '320.000 đ', name: 'Giày sneaker nam thể thao cao cổ vải lưới thoáng khí siêu nhẹ giaynam-GN93 trắng', shop: 'Lazada Vietnam', gg: '-45%' },
        { id: 11, uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1FsYHXAzPt2lPeEOphQkRXd3nPoqnrgZMyORax6b1e1NKGSRshDrOEt6Asw&usqp=CAE', price: '174.000 đ', name: '[ Ảnh Thật ] Giày Thể Thao Nữ Giày Nữ Đế Phối 3 Màu Lượn Sóng Siêu Hot', shop: 'Lazada Vietnam', gg: '-32%' },
        { id: 12, uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsW7QfbR-5-0c0OiywF15u9ffTCCZwRaeJ5Ur1rIOudnKgz8wwysndTtkHvw&usqp=CAE', price: '40.000 đ', name: 'Giày Thể Thao Old Skool Cá Mập Đen Trắng Giá Rẻ', shop: 'shopee', gg: '-16%' },
        { id: 13, uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSqMGXvqosuX4ba2K__CaMka6JZVOvwM6lQBP_M7iHmCNPzzirTHxkae2dRQs&usqp=CAE', price: '99.000 đ', name: 'Giày lười nam Ny phản quang hót', shop: 'shopee', gg: '-22%' },
        { id: 14, uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBhsqQ0Ds1ER3Gx9JKozj7WNhGmF7ujiwUZ8VYIZMC5z_dAjjSKC2h43ORu_8&usqp=CAE', price: '220.000 đ', name: 'GIẦY NAM CAO CẤP M2', shop: 'Lazada Vietnam', gg: '-36%' },
        { id: 15, uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnpvddbKQGrZ49GuhMU2qm3z7zJqXbto478PhlRgQLOZk5ZVTyqBUtlA2_ah8&usqp=CAE', price: '329.000 đ', name: 'Giày thể thao nữ G016', shop: 'Slady Shop', gg: '-18%' },
        { id: 16, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx2skCecS5SNeE1ZHAu6wRql09SsCYrPWCNh2E4z52YEH-4X9O3qebA7wKm4&usqp=CAc', price: '349.000 đ', name: 'Giày Lười Da Thương Vụ Anh (BN0003)', shop: 'agiay.com', gg: '-15%' },
      ],
    };
  }
  renderProduct = ({ item: product }) => {
    const { navigation } = this.props
    return (<Product navigation={navigation} product={product} />)
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.products}
        renderItem={this.renderProduct}
        keyExtractor={(product) => product.id.toString()}
        numColumns={2}
        ListHeaderComponent={() => (<View height={5} />)}
        ListFooterComponent={() => (<View height={5} />)}
      />
    );
  }
}

export default Giohang
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: 'white'
  },
  containerview: {
    flexDirection: 'row',
    height: 40,
    width: 250,
    marginTop: 2,
    marginHorizontal: 5,
    borderWidth: 0.4,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  touchble: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  textimage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  textfind: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: 10,
    tintColor: 'gray'
  },

})
