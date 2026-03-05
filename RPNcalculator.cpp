
#include<iostream>
#include<stack>
#include<sstream>
using namespace std;
int main(){
    stack<char> oprtr;
    stack<double> oprnd;
    string input;
    bool quit=false;
    double x,y;
    while(!quit){
        cout<< "RPN> ";
        cin >> input;
        switch(input[0]){
            case 'Q': case 'q':
            quit = true;
            break;
            case '+':
            y=oprnd.top();
            oprnd.pop();
            x=oprnd.top();
            oprnd.pop();

            cout << "\t" << x << "+" << y << "=" << x+y << endl;
            oprnd.push(x+y);
            break;

            case '-':
            y=oprnd.top();
            oprnd.pop();
            x=oprnd.top();
            oprnd.pop();

            cout << "\t" << x << "-" << y << "=" << x-y << endl;
            oprnd.push(x-y);
            break;

            case '*':
            y=oprnd.top();
            oprnd.pop();
            x=oprnd.top();
            oprnd.pop();

            cout << "\t" << x << "*" << y << "=" << x*y << endl;
            oprnd.push(x*y);
            break;

            case '/':
            y=oprnd.top();
            oprnd.pop();
            x=oprnd.top();
            oprnd.pop();

            cout << "\t" << x << "/" << y << "=" << x/y << endl;
            oprnd.push(x/y);
            break;
            default:
            istringstream in(input);     //convert input to stream
            in >> x;                     //read double from stream
            oprnd.push(x);
        }
    }
}