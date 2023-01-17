import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

function fetchData() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.2) {
      reject(new Error("Simulated error"));
    } else {
      resolve("Data fetched successfully");
    }
  });
}

const FakeFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleFetch = async () => {
    try {
      const result = await fetchData();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    }

    setModalVisible(true);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ color: "#adadad", fontWeight: "600", padding: 10 }}>
              Emulacion de Error
            </Text>
            {error ? (
              <View>
                <Text style={{ color: "red", fontWeight: "600", padding: 10 }}>
                  {error.message}
                </Text>
                <Button title="Reintentar" onPress={handleFetch} />
              </View>
            ) : null}
            {data ? (
              <View>
                <Text
                  style={{ color: "green", fontWeight: "600", padding: 10 }}
                >
                  {data}
                </Text>
                <Button
                  title="Cerrar"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default FakeFetch;
