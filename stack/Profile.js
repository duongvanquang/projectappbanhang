import React, { Component } from 'react';
import {
  View, Text,
  TouchableOpacity,
  StyleSheet, Image,
  Dimensions
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { route } = this.props
    const product = route?.params?.product
    const { uri, name, price, gg } = product
    return (
      <View style={styles.containerprofile}>
        <Image
          style={styles.imageProduct}
          source={{ uri }} />
        <View style={styles.containerchitiet}>
          <Text style={styles.chitiet}> {name}</Text>
          <View style={styles.containert}>
            <Text style={styles.chitiets}>{gg}</Text>
            <Text style={styles.chitiets}>{price}</Text>
          </View>
        </View>
        <Text style={styles.containerfont}>AVAILABLE SIZES</Text>
        <View style={styles.sizeview}>
          < TouchableOpacity style={styles.contaisize}>
            <Text style={styles.sizetext}>39</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contaisize}>
            <Text style={styles.sizetext}>40</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contaisize}>
            <Text style={styles.sizetext}>41</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contaisize}>
            <Text style={styles.sizetext}>42</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width)
const widthImage = Math.round(width)

const styles = StyleSheet.create({
  containerprofile: {
    flex: 1,
  },
  imageProduct: {
    width: widthImage,
    height: heightImage,
    alignSelf: 'center',
    borderRadius: 10
  },
  chitiet: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold'
  },
  containerchitiet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  chitiets: {
    fontSize: 15,
    marginTop: 5,
    color: 'red'
  },
  containert: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  contaisize: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  containerfont: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    color: 'blue',
  },
  sizetext: {
    color: 'red',
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    height: 35,
    width: 80,
    padding: 5,
    marginHorizontal: 5,
    paddingHorizontal: 25,
    backgroundColor: '#b3cccc'
  },
  sizeview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 5
  }
})
