using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyLibrary;
 
namespace MyApp
{
   public class Program 
    {
        static void Main(string[] args)
        {
           //performing Arthemitic operations 

            Console.WriteLine(" Hello world");

            Calculator calc = new Calculator();

            double Addition = calc.Add(25,5 );

            Console.WriteLine("25+5={0}", Addition);

            double Subtration = calc.Sub(25, 5);

            Console.WriteLine("25-5={0}", Subtration);

            double Multiplication = calc.Mul(25, 5);

            Console.WriteLine("25*5={0}", Multiplication);

            double Division = calc.Div(25, 5);

            Console.WriteLine("25/5={0}", Division);

             
            //Displaying DateTime
            DateTime now = DateTime.Now;
            now = now.AddDays(0);
            Console.WriteLine("{0}", now);
            Console.WriteLine("{0:d}",now);
            Console.WriteLine("{0:MMM dd yyyy}",now);
            Console.ReadLine();
        }

        public static object Add(int p1, int p2)
        {
            throw new NotImplementedException();
        }
    }
}
