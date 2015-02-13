using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using MyLibrary;
using MyApp;

namespace UnitTestMyApp
{
    [TestClass]
    public class UnitTestforMyApp
    {
        [TestMethod]
        public void TestMethodAdd()
        {
            Program calc = new Program();
            double result = 30;
            Assert.AreEqual(result, calc.Add(10,20));    

           
        }
    }
}
