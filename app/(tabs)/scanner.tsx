import { useTicket } from "@/api/api";
import { useIsFocused } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useCameraPermission, useCameraDevice, Camera, useCodeScanner } from "react-native-vision-camera";

const Scanner = () => {

  const { hasPermission, requestPermission } = useCameraPermission();
  if (!hasPermission) requestPermission();
  const device = useCameraDevice("back");
  const isFocused = useIsFocused();

  const [showingAlert, setShowingAlert] = useState(false);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async (codes) => {
      if (showingAlert) return;
      setShowingAlert(true);
      const code = codes[0].value!;
      const used = await useTicket(code);
      console.log(used);
      Alert.alert('Scanned Code', used, [{text: 'Close', style: "cancel", onPress: () => setShowingAlert(false)}]);
    }
  });

  return (
    <View style={styles.container}>
      {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          codeScanner={codeScanner}
          device={device}
          isActive={isFocused}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Scanner;