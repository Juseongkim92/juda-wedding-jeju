import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GiftSection() {
  const [copiedBank, setCopiedBank] = useState(null)

  const accounts = [
    {
      title: '신랑',
      name: '김주성',
      bank: '국민은행',
      accountNumber: '123-456-789012',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
    },
    {
      title: '신부',
      name: '조다빈',
      bank: '우리은행',
      accountNumber: '098-765-432109',
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-300',
    },
    {
      title: '신랑 아버지',
      name: '김한섭',
      bank: 'KB국민은행',
      accountNumber: '123-456-789012',
      color: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-300',
    },
  ]

  const handleCopy = (accountNumber, index) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedBank(index)
    setTimeout(() => setCopiedBank(null), 2000)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-orange-600">
          마음 전하실 곳
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm">
          참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.<br />
          너그러운 마음으로 양해 부탁드립니다.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {accounts.map((account, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${account.color} p-6 rounded-2xl border-2 ${account.borderColor}`}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {account.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{account.name}</p>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">은행</p>
                <p className="text-sm font-semibold text-gray-800">
                  {account.bank}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-1">계좌번호</p>
                <p className="text-sm font-mono font-bold text-gray-800 break-all">
                  {account.accountNumber}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(account.accountNumber, idx)}
                className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition ${
                  copiedBank === idx
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-orange-600 border border-orange-300 hover:bg-orange-50'
                }`}
              >
                {copiedBank === idx ? '✓ 복사됨' : '계좌번호 복사'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
