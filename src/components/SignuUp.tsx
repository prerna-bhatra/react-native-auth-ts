import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SignupForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your email"
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && <Text>This field is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your password"
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      {errors.password && <Text>This field is required.</Text>}

      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignupForm;
