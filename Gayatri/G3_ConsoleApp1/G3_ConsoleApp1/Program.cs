using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MyClassLibrary_G3;

namespace G3_ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("This is my First Program-Gayatri");

            My_AddClass md = new My_AddClass();
            var result=0;
             result=md.Add(10,20);
            Console.WriteLine("Result of Addition is : {0}",result);
             

             Rev_Class rc = new Rev_Class();
             Console.WriteLine("Reverse of 1234 is :{0}", rc.Fun_Rev(1234));

             Big3 b3 = new Big3();
             Console.WriteLine("Biggest of (10,30,5) are:{0}", b3.Biggest3(10, 30, 5));



             Console.ReadLine();

             
                     

        }
    }
}
