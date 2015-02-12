using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace MyClassLibrary_G3
{
    public class Rev_Class
    {
        public int Fun_Rev(int a)
        {
            var k = a;
            int sum = 0, rem;
            while (k != 0)
            {
                rem = k % 10;
                sum = sum * 10 + rem;
                k = k / 10;
            }
            return sum;
        }


    }
}
