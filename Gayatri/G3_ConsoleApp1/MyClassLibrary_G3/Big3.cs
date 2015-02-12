using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MyClassLibrary_G3
{
    public class Big3
    {
        public int Biggest3(int a, int b, int c)
        {
            if (a > b && a > c)
                return a;
            else if (b > c)
                return b;
            else
                return c;
        }


    }
}
