type User = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(user: User): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error('User has no displayName field');
}

function logUserByDisplayName(user: User) {
  assertDisplayName(user);

  console.log(user.displayName.toUpperCase());
}

interface Order {
  address: string;
}

interface TelephoneOrder extends Order {
  callerNumber: string;
}

interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order && 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && 'callerNumber' in order;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}

export {}