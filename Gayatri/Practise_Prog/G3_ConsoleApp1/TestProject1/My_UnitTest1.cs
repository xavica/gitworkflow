using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MyClassLibrary_G3;

namespace TestProject1
{
    [TestClass]
    public class My_UnitTest1
    {
        
       
        [TestMethod]
        public void TestMethod1_Rev()
        {
            Rev_Class rc = new Rev_Class();
            var result = 4321;
            Assert.AreEqual(result, rc.Fun_Rev(1234), "Reverse of 4 digit Number");
            Assert.AreEqual(79861,rc.Fun_Rev(16897), "Reverse of 5 digit Number");
            Assert.AreEqual(456, rc.Fun_Rev(654), "Reverse of 3 digit Number");
         }
        public void TestMethod1_Add()
        {
            My_AddClass mad = new My_AddClass();
            var result = 41;
            Assert.AreEqual(result, mad.Add(12,29), "Sum of 2 two digit Numbers");
            Assert.AreEqual(79861, mad.Add(70000,9861), "Sum of two 5 digit Numbers");

        }
        public void TestMethod1_Big()
        {
            Big3 bg = new Big3();
            var result = 41;
            Assert.AreEqual(result, bg.Biggest3(12,29,41), "Biggest of 3 two digit Numbers");
            Assert.AreEqual(98614, bg.Biggest3(70000, 98614,12345), "Biggest of 3 Five digit Numbers");

        }



    }
}
