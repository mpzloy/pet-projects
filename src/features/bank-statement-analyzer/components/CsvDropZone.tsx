'use client'

import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Card, CardContent, CardFooter} from "@/shared/ui/card";
import {LoadCsvFile} from "@/features/types/types";
import useAppState from "@/features/bank-statement-analyzer/hooks/useAppState";

function CsvDropZone({onLoadFile}: LoadCsvFile) {
  const [wrongFileType, setWrongFileType] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('')

  const {state, dispatch} = useAppState()

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {"text/csv": []},
    onDrop: async (acceptedFiles) => {

      if (acceptedFiles.length === 0) {
        setWrongFileType(true)
      } else {
        setFileName(acceptedFiles[0].name)
        onLoadFile(acceptedFiles[0])
      }
    }
  })

  return (
    <Card className=" border-dashed border-2 rounded-2xl ring-0">
      <CardContent className="flex justify-center items-center h-48 cursor-pointer" {...getRootProps()}>
        <input {...getInputProps()} accept="text/csv"/>
        {
          isDragActive ?
            <p>Перетягніть файл сюди ...</p> :
            <p>Перетягніть файл .csv в це поле, або натисніть та оберіть файл</p>
        }
      </CardContent>

      <CardFooter className={`${wrongFileType ? 'bg-red-50 dark:bg-red-50/10' : ''} py-2`}>
        {wrongFileType
          ?
          <p className="text-red-400 text-sm">Невірний тип файлу. Будь ласка, виберіть файл .csv.</p>
          :
          <p className="text-sm">Назва файлу: {fileName}</p>
        }
      </CardFooter>

    </Card>
  )
}

export default CsvDropZone;