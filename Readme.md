# Doubt

## throw v/s throw new error

It means that when you encounter some negative scenario in your code flow, you want to know the error and handle the error. That is when a throwing error comes in.

>**_Important note_** :  when using throw / throw new Error, you should wrap all your code in a try-catch block. So when you throw an error, it will go to the catch section and you can handle the error as you wish.

The difference between throw and throw new Error is just for customization. So if you want to have your own error object, you can use throw, but if you want a standard error object, you can use throw new Error.

1. With throw, you can create an error object as you wish (example below)

2. With throw new Error, you can only put a string message in the parameter. And it already has a default object structure. (Example below).

Example 1 (using throw):

Let’s say we want to make a simple function to transfer funds.
```
async function transfer (amount, accountData) {
  try {
    // 1) validation request
    if (!amount || !accountData.account_number || !accountData.bank_code) throw({ name: 'error.validation', errMsg: 'Bad request'});
    
    // 2) transfer
    const dataTransfer = {
      amount: amount,
      account_number: accountData.account_number,
      bank_code: accountData.bank_code
    }
    const resultTransfer = await processTransfer(dataTransfer);
    if (!resultTransfer.status) throw({ name: 'error.transfer', errMsg: 'Failed transfer'});
   
    return { status: true, message: 'Success transfer' };
  } catch (error) 
    return { 
      status: false, 
      error: { 
      type: 'error.name', 
      message: 'error.errMsg' 
    }
  }
}
```
With throw, i can create my own custom error object. And for this example it has 2 properties :

1. name: the type or name of the error.

2. errMsg: the error message
You can add many more properties to the parameter as you wish.

Example 2 (using throw new Error) :

```
async function transfer (amount, accountData) {
  try {
    // 1) validation request
    if (!amount || !accountData.account_number || !accountData.bank_code) throw new Error('Bad request');
    
    // 2) transfer
    const dataTransfer = {
      amount: amount,
      account_number: accountData.account_number,
      bank_code: accountData.bank_code
    }
    const resultTransfer = await processTransfer(dataTransfer);
    if (!resultTransfer.status) throw new Error('Transfer failed');
   
    return { status: true, message: 'Success transfer' };
  } catch (error) {
    // handle your error
    return { status: false, message: error.message }
  }
}
```
With throw new Error, they have a standard properties format such as :

1. name: the name of the error, or more specifically, the name of the constructor function the error belongs to.

2. message: A description of the error.

## console.error() v/s throw new error || throw

- [Link](https://dev.to/ondrejsevcik/consoleerror-or-throw-new-error-c9)

## Arrow Function v/s Normal Function