import { Box, Button, FormControl, Heading, Input, ScrollView, View, VStack } from "native-base";
import React, { useState } from "react";
import { ToastAndroid } from "react-native";

export const LoginModel: React.FC = () => {
    
    const[refName, setRefName] = useState("");
    const[refCognome, setRefCognome] = useState("");
    const[refNumber, setRefNumber] = useState("");
    
    const signIn = () => {
      const inscritto = {
         nome: refName,
         cognome: refCognome,
         numero: refNumber
      }  

        fetch('https://www.cascinamarcella.it/API', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inscritto)
        }).then(res=> ToastAndroid.show("Ti sei iscritto!" , ToastAndroid.SHORT)).catch(err=> ToastAndroid.show("Non ti sei iscritto perché "+err, ToastAndroid.LONG));
    }
    return (
       
    <Box safeArea p="2" py="8" w="90%" maxW="290"> 
        <FormControl >
          <Heading mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="lg">Login</Heading>
                <FormControl.Label>Nome</FormControl.Label>
                <Input onChangeText={val=> setRefName(val)} type="text" />
                <FormControl.Label>Cognome</FormControl.Label>
                <Input onChangeText={val=> setRefCognome(val)} type="text" />

                <FormControl.Label>Numero di tel</FormControl.Label>
                <Input type="number"  keyboardType="numeric" onChangeText={val => setRefNumber(val)}/>
                <Button mt="2" colorScheme="indigo" onPress={signIn}>
                    Conferma
                </Button>

        </FormControl>
    </Box>
      
    );
  };
  

